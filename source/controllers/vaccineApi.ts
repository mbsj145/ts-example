import { NextFunction, Request, Response } from 'express';
import CovidSchema from '../models/covid';
import responses from '../config/dto';
import status from '../config/rsCodes';
import getJsonData from "./helper";

const loadVaccineRecords = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let { BADREQUEST, SUCCESS } = status;
        let jsonData: any = await getJsonData();
        let findRecords = await CovidSchema.find();
        if (findRecords.length > 0)
            return responses.sendResponse(res, BADREQUEST, "Already Data Load Into Database", findRecords);
        else
            await CovidSchema.insertMany(jsonData['records']);
        return responses.sendResponse(res, SUCCESS, "Data Load Into Database", jsonData['records']);
    } catch (error) { responses.errReturned(res, error); }
};

const vaccineSummary = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let { BADREQUEST, SUCCESS } = status;
        let data = req.query;
        let { c, dateFrom, dateTo, range } = data;
        let required = ['c', 'dateFrom', 'dateTo', 'range'];
        for (let key of required)
            if (!data[key] || data[key] == '' || data[key] == undefined || data[key] == null)
                return responses.sendResponse(res, BADREQUEST, "Please Provid Valid Queries", [])

        let findRecords = await CovidSchema.find({ YearWeekISO: <any>{ $gte: dateFrom, $lt: dateTo }, ReportingCountry: <any>c }).limit(Number(range));
        if (findRecords)
            return responses.sendResponse(res, SUCCESS, "Data Found....", findRecords);
        else
            return responses.sendResponse(res, BADREQUEST, "Data Not Found....", []);
    } catch (error) { responses.errReturned(res, error); }
};


export default { loadVaccineRecords, vaccineSummary };
