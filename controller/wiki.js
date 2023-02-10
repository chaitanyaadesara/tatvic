const axios = require('axios');
let mongoose = require('mongoose');
let SearchHistory = require('../models/SearchHistory');

module.exports = {
    search: async (req, res) => {
        try {
            let params = {
                action: "query",
                list: "search",
                srsearch: req.params.text,
                format: "json"
            };
            let url = 'https://en.wikipedia.org/w/api.php' + "?origin=*";
            Object.keys(params).forEach(function (key) { url += "&" + key + "=" + params[key]; });

            let config = {
                method: 'get',
                url: url
            };
            let searchSaved = new SearchHistory({ searchText: req.params.text });
            searchSaved = await searchSaved.save();
            let searchData = await axios(config)
            res.send(searchData.data)

        } catch (error) {
            console.log(error);
            res.status(500).json({
                error: error
            });
        }
    },
    getSearchHistoryCount: async (req, res) => {
        if (req.params.groupBy !== '1Hour' && req.params.groupBy !== '1Day') {
            res.status(400).json({
                error: "Invalid Parameters"
            });
            return;
        }
        try {
            let match = {}
            let hour = new Date().getHours();
            let day = new Date().getDate();
            let month = (new Date().getMonth() + 1);
            let year = new Date().getFullYear();
            if (req.params.groupBy === '1Hour') {
                match = { "year": year, "month": month, "day": day, "hour": hour }
            }
            if (req.params.groupBy === '1Day') {
                match = { "year": year, "month": month, "day": day }
            }
            let project = {
                "$project": {
                    "year": { "$year": { date: "$createdAt", timezone: "+0530" } },
                    "month": { "$month": { date: "$createdAt", timezone: "+0530" } },
                    "day": { "$dayOfMonth": { date: "$createdAt", timezone: "+0530" } },
                    "hour": { "$hour": { date: "$createdAt", timezone: "+0530" } },
                    searchText: 1
                }
            };
            let searchHistory = await SearchHistory.aggregate([project, { "$match": match }]);
            res.status(200).send({ count: searchHistory.length })
        } catch (error) {
            console.log(error);
            res.status(500).json({
                error: error
            });
        }
    },
    getSearchHistoryByDate: async (req, res) => {
        try {
            let date = new Date();
            if (req.query && req.query.date) {
                date = new Date(req.query.date)
            }
            let hour = date.getHours();
            let day = date.getDate();
            let month = (date.getMonth() + 1);
            let year = date.getFullYear();

            let match = { "$match": { "year": year, "month": month, "day": day } }
            let group = { "$group": { _id: "$hour", data: { $push: "$$ROOT" } } }
            let project = {
                "$project": {
                    "year": { "$year": { date: "$createdAt", timezone: "+0530" } },
                    "month": { "$month": { date: "$createdAt", timezone: "+0530" } },
                    "day": { "$dayOfMonth": { date: "$createdAt", timezone: "+0530" } },
                    "hour": { "$hour": { date: "$createdAt", timezone: "+0530" } },
                    searchText: 1
                }
            };
            let searchHistory = await SearchHistory.aggregate([project, match, group]);
            res.status(200).send({ data: searchHistory })
        } catch (error) {
            console.log(error);
            res.status(500).json({
                error: error
            });
        }
    }
}