

import ApiClient from '../ApiClient';
import EnumOptionData from './EnumOptionData';

/**
 * The LoanProductInterestRecalculationData model module.
 * @module model/LoanProductInterestRecalculationData
 * @version 1.0
 */
class LoanProductInterestRecalculationData {
    /**
     * Constructs a new <code>LoanProductInterestRecalculationData</code>.
     * @alias module:model/LoanProductInterestRecalculationData
     */
    constructor() { 
        
        LoanProductInterestRecalculationData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoanProductInterestRecalculationData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoanProductInterestRecalculationData} obj Optional instance to populate.
     * @return {module:model/LoanProductInterestRecalculationData} The populated <code>LoanProductInterestRecalculationData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoanProductInterestRecalculationData();

            if (data.hasOwnProperty('interestRecalculationCompoundingType')) {
                obj['interestRecalculationCompoundingType'] = EnumOptionData.constructFromObject(data['interestRecalculationCompoundingType']);
            }
            if (data.hasOwnProperty('rescheduleStrategyType')) {
                obj['rescheduleStrategyType'] = EnumOptionData.constructFromObject(data['rescheduleStrategyType']);
            }
            if (data.hasOwnProperty('recalculationRestFrequencyType')) {
                obj['recalculationRestFrequencyType'] = EnumOptionData.constructFromObject(data['recalculationRestFrequencyType']);
            }
            if (data.hasOwnProperty('recalculationRestFrequencyInterval')) {
                obj['recalculationRestFrequencyInterval'] = ApiClient.convertToType(data['recalculationRestFrequencyInterval'], 'Number');
            }
            if (data.hasOwnProperty('recalculationRestFrequencyNthDay')) {
                obj['recalculationRestFrequencyNthDay'] = EnumOptionData.constructFromObject(data['recalculationRestFrequencyNthDay']);
            }
            if (data.hasOwnProperty('recalculationRestFrequencyWeekday')) {
                obj['recalculationRestFrequencyWeekday'] = EnumOptionData.constructFromObject(data['recalculationRestFrequencyWeekday']);
            }
            if (data.hasOwnProperty('recalculationRestFrequencyOnDay')) {
                obj['recalculationRestFrequencyOnDay'] = ApiClient.convertToType(data['recalculationRestFrequencyOnDay'], 'Number');
            }
            if (data.hasOwnProperty('recalculationCompoundingFrequencyType')) {
                obj['recalculationCompoundingFrequencyType'] = EnumOptionData.constructFromObject(data['recalculationCompoundingFrequencyType']);
            }
            if (data.hasOwnProperty('recalculationCompoundingFrequencyInterval')) {
                obj['recalculationCompoundingFrequencyInterval'] = ApiClient.convertToType(data['recalculationCompoundingFrequencyInterval'], 'Number');
            }
            if (data.hasOwnProperty('recalculationCompoundingFrequencyNthDay')) {
                obj['recalculationCompoundingFrequencyNthDay'] = EnumOptionData.constructFromObject(data['recalculationCompoundingFrequencyNthDay']);
            }
            if (data.hasOwnProperty('recalculationCompoundingFrequencyWeekday')) {
                obj['recalculationCompoundingFrequencyWeekday'] = EnumOptionData.constructFromObject(data['recalculationCompoundingFrequencyWeekday']);
            }
            if (data.hasOwnProperty('recalculationCompoundingFrequencyOnDay')) {
                obj['recalculationCompoundingFrequencyOnDay'] = ApiClient.convertToType(data['recalculationCompoundingFrequencyOnDay'], 'Number');
            }
            if (data.hasOwnProperty('compoundingToBePostedAsTransaction')) {
                obj['compoundingToBePostedAsTransaction'] = ApiClient.convertToType(data['compoundingToBePostedAsTransaction'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/EnumOptionData} interestRecalculationCompoundingType
 */
LoanProductInterestRecalculationData.prototype['interestRecalculationCompoundingType'] = undefined;

/**
 * @member {module:model/EnumOptionData} rescheduleStrategyType
 */
LoanProductInterestRecalculationData.prototype['rescheduleStrategyType'] = undefined;

/**
 * @member {module:model/EnumOptionData} recalculationRestFrequencyType
 */
LoanProductInterestRecalculationData.prototype['recalculationRestFrequencyType'] = undefined;

/**
 * @member {Number} recalculationRestFrequencyInterval
 */
LoanProductInterestRecalculationData.prototype['recalculationRestFrequencyInterval'] = undefined;

/**
 * @member {module:model/EnumOptionData} recalculationRestFrequencyNthDay
 */
LoanProductInterestRecalculationData.prototype['recalculationRestFrequencyNthDay'] = undefined;

/**
 * @member {module:model/EnumOptionData} recalculationRestFrequencyWeekday
 */
LoanProductInterestRecalculationData.prototype['recalculationRestFrequencyWeekday'] = undefined;

/**
 * @member {Number} recalculationRestFrequencyOnDay
 */
LoanProductInterestRecalculationData.prototype['recalculationRestFrequencyOnDay'] = undefined;

/**
 * @member {module:model/EnumOptionData} recalculationCompoundingFrequencyType
 */
LoanProductInterestRecalculationData.prototype['recalculationCompoundingFrequencyType'] = undefined;

/**
 * @member {Number} recalculationCompoundingFrequencyInterval
 */
LoanProductInterestRecalculationData.prototype['recalculationCompoundingFrequencyInterval'] = undefined;

/**
 * @member {module:model/EnumOptionData} recalculationCompoundingFrequencyNthDay
 */
LoanProductInterestRecalculationData.prototype['recalculationCompoundingFrequencyNthDay'] = undefined;

/**
 * @member {module:model/EnumOptionData} recalculationCompoundingFrequencyWeekday
 */
LoanProductInterestRecalculationData.prototype['recalculationCompoundingFrequencyWeekday'] = undefined;

/**
 * @member {Number} recalculationCompoundingFrequencyOnDay
 */
LoanProductInterestRecalculationData.prototype['recalculationCompoundingFrequencyOnDay'] = undefined;

/**
 * @member {Boolean} compoundingToBePostedAsTransaction
 */
LoanProductInterestRecalculationData.prototype['compoundingToBePostedAsTransaction'] = undefined;






export default LoanProductInterestRecalculationData;

