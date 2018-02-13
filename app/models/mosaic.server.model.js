import mongoose from 'mongoose';

let MosaicSchema = new mongoose.Schema({
	mosaicName: {type: String, required: true},
	namespace: {type: String, required: true},
	description: {type: String},
	divisibility: {type: Number},
	initialSupply: {type: Number},
	supplyMutable: {type: Number},
	transferable: {type: Number},
	levyType: {type: Number},
	levyRecipient: {type: String},
	levyNamespace: {type: String},
	levyMosaic: {type: String},
	levyFee: {type: Number},
	timeStamp: {type: Number, required: true},
	creator: {type: String, required: true},
	height: {type: Number, required: true}
});

//init Mosaic Schema
mongoose.model('Mosaic', MosaicSchema);