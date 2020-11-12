

import ApiClient from '../ApiClient';

/**
 * The LoanProductInterestRecalculationDetails model module.
 * @module model/LoanProductInterestRecalculationDetails
 * @version 1.0
 */
class LoanProductInterestRecalculationDetails {
    /**
     * Constructs a new <code>LoanProductInterestRecalculationDetails</code>.
     * @alias module:model/LoanProductInterestRecalculationDetails
     */
    constructor() { 
        
        LoanProductInterestRecalculationDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoanProductInterestRecalculationDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoanProductInterestRecalculationDetails} obj Optional instance to populate.
     * @return {module:model/LoanProductInterestRecalculationDetails} The populated <code>LoanProductInterestRecalculationDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoanProductInterestRecalculationDetails();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('interestRecalculationCompoundingMethod')) {
                obj['interestRecalculationCompoundingMethod'] = ApiClient.convertToType(data['interestRecalculationCompoundingMethod'], 'Number');
            }
            if (data.hasOwnProperty('rescheduleStrategyMethod')) {
                obj['rescheduleStrategyMethod'] = ApiClient.convertToType(data['rescheduleStrategyMethod'], 'Number');
            }
            if (data.hasOwnProperty('restFrequencyType')) {
                obj['restFrequencyType'] = ApiClient.convertToType(data['restFrequencyType'], 'String');
            }
            if (data.hasOwnProperty('restInterval')) {
                obj['restInterval'] = ApiClient.convertToType(data['restInterval'], 'Number');
            }
            if (data.hasOwnProperty('restFrequencyNthDay')) {
                obj['restFrequencyNthDay'] = ApiClient.convertToType(data['restFrequencyNthDay'], 'Number');
            }
            if (data.hasOwnProperty('restFrequencyWeekday')) {
                obj['restFrequencyWeekday'] = ApiClient.convertToType(data['restFrequencyWeekday'], 'Number');
            }
            if (data.hasOwnProperty('restFrequencyOnDay')) {
                obj['restFrequencyOnDay'] = ApiClient.convertToType(data['restFrequencyOnDay'], 'Number');
            }
            if (data.hasOwnProperty('compoundingFrequencyType')) {
                obj['compoundingFrequencyType'] = ApiClient.convertToType(data['compoundingFrequencyType'], 'String');
            }
            if (data.hasOwnProperty('compoundingInterval')) {
                obj['compoundingInterval'] = ApiClient.convertToType(data['compoundingInterval'], 'Number');
            }
            if (data.hasOwnProperty('compoundingFrequencyNthDay')) {
                obj['compoundingFrequencyNthDay'] = ApiClient.convertToType(data['compoundingFrequencyNthDay'], 'Number');
            }
            if (data.hasOwnProperty('compoundingFrequencyWeekday')) {
                obj['compoundingFrequencyWeekday'] = ApiClient.convertToType(data['compoundingFrequencyWeekday'], 'Number');
            }
            if (data.hasOwnProperty('compoundingFrequencyOnDay')) {
                obj['compoundingFrequencyOnDay'] = ApiClient.convertToType(data['compoundingFrequencyOnDay'], 'Number');
            }
            if (data.hasOwnProperty('isCompoundingToBePostedAsTransaction')) {
                obj['isCompoundingToBePostedAsTransaction'] = ApiClient.convertToType(data['isCompoundingToBePostedAsTransaction'], 'Boolean');
            }
            if (data.hasOwnProperty('arrearsBasedOnOriginalSchedule')) {
                obj['arrearsBasedOnOriginalSchedule'] = ApiClient.convertToType(data['arrearsBasedOnOriginalSchedule'], 'Boolean');
            }
            if (data.hasOwnProperty('new')) {
                obj['new'] = ApiClient.convertToType(data['new'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
LoanProductInterestRecalculationDetails.prototype['id'] = undefined;

/**
 * @member {Number} interestRecalculationCompoundingMethod
 */
LoanProductInterestRecalculationDetails.prototype['interestRecalculationCompoundingMethod'] = undefined;

/**
 * @member {Number} rescheduleStrategyMethod
 */
LoanProductInterestRecalculationDetails.prototype['rescheduleStrategyMethod'] = undefined;

/**
 * @member {module:model/LoanProductInterestRecalculationDetails.RestFrequencyTypeEnum} restFrequencyType
 */
LoanProductInterestRecalculationDetails.prototype['restFrequencyType'] = undefined;

/**
 * @member {Number} restInterval
 */
LoanProductInterestRecalculationDetails.prototype['restInterval'] = undefined;

/**
 * @member {Number} restFrequencyNthDay
 */
LoanProductInterestRecalculationDetails.prototype['restFrequencyNthDay'] = undefined;

/**
 * @member {Number} restFrequencyWeekday
 */
LoanProductInterestRecalculationDetails.prototype['restFrequencyWeekday'] = undefined;

/**
 * @member {Number} restFrequencyOnDay
 */
LoanProductInterestRecalculationDetails.prototype['restFrequencyOnDay'] = undefined;

/**
 * @member {module:model/LoanProductInterestRecalculationDetails.CompoundingFrequencyTypeEnum} compoundingFrequencyType
 */
LoanProductInterestRecalculationDetails.prototype['compoundingFrequencyType'] = undefined;

/**
 * @member {Number} compoundingInterval
 */
LoanProductInterestRecalculationDetails.prototype['compoundingInterval'] = undefined;

/**
 * @member {Number} compoundingFrequencyNthDay
 */
LoanProductInterestRecalculationDetails.prototype['compoundingFrequencyNthDay'] = undefined;

/**
 * @member {Number} compoundingFrequencyWeekday
 */
LoanProductInterestRecalculationDetails.prototype['compoundingFrequencyWeekday'] = undefined;

/**
 * @member {Number} compoundingFrequencyOnDay
 */
LoanProductInterestRecalculationDetails.prototype['compoundingFrequencyOnDay'] = undefined;

/**
 * @member {Boolean} isCompoundingToBePostedAsTransaction
 */
LoanProductInterestRecalculationDetails.prototype['isCompoundingToBePostedAsTransaction'] = undefined;

/**
 * @member {Boolean} arrearsBasedOnOriginalSchedule
 */
LoanProductInterestRecalculationDetails.prototype['arrearsBasedOnOriginalSchedule'] = undefined;

/**
 * @member {Boolean} new
 */
LoanProductInterestRecalculationDetails.prototype['new'] = undefined;





/**
 * Allowed values for the <code>restFrequencyType</code> property.
 * @enum {String}
 * @readonly
 */
LoanProductInterestRecalculationDetails['RestFrequencyTypeEnum'] = {

    /**
     * value: "INVALID"
     * @const
     */
    "INVALID": "INVALID",

    /**
     * value: "SAME_AS_REPAYMENT_PERIOD"
     * @const
     */
    "SAME_AS_REPAYMENT_PERIOD": "SAME_AS_REPAYMENT_PERIOD",

    /**
     * value: "DAILY"
     * @const
     */
    "DAILY": "DAILY",

    /**
     * value: "WEEKLY"
     * @const
     */
    "WEEKLY": "WEEKLY",

    /**
     * value: "MONTHLY"
     * @const
     */
    "MONTHLY": "MONTHLY"
};


/**
 * Allowed values for the <code>compoundingFrequencyType</code> property.
 * @enum {String}
 * @readonly
 */
LoanProductInterestRecalculationDetails['CompoundingFrequencyTypeEnum'] = {

    /**
     * value: "INVALID"
     * @const
     */
    "INVALID": "INVALID",

    /**
     * value: "SAME_AS_REPAYMENT_PERIOD"
     * @const
     */
    "SAME_AS_REPAYMENT_PERIOD": "SAME_AS_REPAYMENT_PERIOD",

    /**
     * value: "DAILY"
     * @const
     */
    "DAILY": "DAILY",

    /**
     * value: "WEEKLY"
     * @const
     */
    "WEEKLY": "WEEKLY",

    /**
     * value: "MONTHLY"
     * @const
     */
    "MONTHLY": "MONTHLY"
};



export default LoanProductInterestRecalculationDetails;

