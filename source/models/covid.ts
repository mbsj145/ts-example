import mongoose, { Schema } from 'mongoose';
import ICovid from '../interfaces/covid';

const CovidSchema: Schema = new Schema(
    {
        YearWeekISO: { type: String },
        FirstDose: { type: Number },
        FirstDoseRefused: { type: String },
        SecondDose: { type: Number },
        DoseAdditional1: { type: Number },
        DoseAdditional2: { type: Number },
        UnknownDose: { type: Number },
        NumberDosesReceived: { type: Number },
        NumberDosesExported: { type: Number },
        Region: { type: String },
        Population: { type: String },
        ReportingCountry: { type: String },
        TargetGroup: { type: String },
        Vaccine: { type: String },
        Denominator: { type: Number }
    },
    {
        timestamps: true
    }
);

export default mongoose.model<ICovid>('Covid', CovidSchema);
