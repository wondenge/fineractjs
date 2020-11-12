

import ApiClient from '../ApiClient';
import GetLoanProductsInterestRecalculationCompoundingFrequencyType from './GetLoanProductsInterestRecalculationCompoundingFrequencyType';
import GetLoanProductsInterestRecalculationCompoundingType from './GetLoanProductsInterestRecalculationCompoundingType';
import GetLoanProductsPreClosureInterestCalculationStrategy from './GetLoanProductsPreClosureInterestCalculationStrategy';
import GetLoanProductsRescheduleStrategyType from './GetLoanProductsRescheduleStrategyType';

/**
 * The GetLoanProductsInterestRecalculationData model module.
 * @module model/GetLoanProductsInterestRecalculationData
 * @version 1.0
 */
class GetLoanProductsInterestRecalculationData {
    /**
     * Constructs a new <code>GetLoanProductsInterestRecalculationData</code>.
     * @alias module:model/GetLoanProductsInterestRecalculationData
     */
    constructor() { 
        
        GetLoanProductsInterestRecalculationData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetLoanProductsInterestRecalculationData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLoanProductsInterestRecalculationData} obj Optional instance to populate.
     * @return {module:model/GetLoanProductsInterestRecalculationData} The populated <code>GetLoanProductsInterestRecalculationData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLoanProductsInterestRecalculationData();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('productId')) {
                obj['productId'] = ApiClient.convertToType(data['productId'], 'Number');
            }
            if (data.hasOwnProperty('interestRecalculationCompoundingType')) {
                obj['interestRecalculationCompoundingType'] = GetLoanProductsInterestRecalculationCompoundingType.constructFromObject(data['interestRecalculationCompoundingType']);
            }
            if (data.hasOwnProperty('interestRecalculationCompoundingFrequencyType')) {
                obj['interestRecalculationCompoundingFrequencyType'] = GetLoanProductsInterestRecalculationCompoundingFrequencyType.constructFromObject(data['interestRecalculationCompoundingFrequencyType']);
            }
            if (data.hasOwnProperty('rescheduleStrategyType')) {
                obj['rescheduleStrategyType'] = GetLoanProductsRescheduleStrategyType.constructFromObject(data['rescheduleStrategyType']);
            }
            if (data.hasOwnProperty('recalculationRestFrequencyType')) {
                obj['recalculationRestFrequencyType'] = GetLoanProductsInterestRecalculationCompoundingFrequencyType.constructFromObject(data['recalculationRestFrequencyType']);
            }
            if (data.hasOwnProperty('preClosureInterestCalculationStrategy')) {
                obj['preClosureInterestCalculationStrategy'] = GetLoanProductsPreClosureInterestCalculationStrategy.constructFromObject(data['preClosureInterestCalculationStrategy']);
            }
            if (data.hasOwnProperty('isArrearsBasedOnOriginalSchedule')) {
                obj['isArrearsBasedOnOriginalSchedule'] = ApiClient.convertToType(data['isArrearsBasedOnOriginalSchedule'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetLoanProductsInterestRecalculationData.prototype['id'] = undefined;

/**
 * @member {Number} productId
 */
GetLoanProductsInterestRecalculationData.prototype['productId'] = undefined;

/**
 * @member {module:model/GetLoanProductsInterestRecalculationCompoundingType} interestRecalculationCompoundingType
 */
GetLoanProductsInterestRecalculationData.prototype['interestRecalculationCompoundingType'] = undefined;

/**
 * @member {module:model/GetLoanProductsInterestRecalculationCompoundingFrequencyType} interestRecalculationCompoundingFrequencyType
 */
GetLoanProductsInterestRecalculationData.prototype['interestRecalculationCompoundingFrequencyType'] = undefined;

/**
 * @member {module:model/GetLoanProductsRescheduleStrategyType} rescheduleStrategyType
 */
GetLoanProductsInterestRecalculationData.prototype['rescheduleStrategyType'] = undefined;

/**
 * @member {module:model/GetLoanProductsInterestRecalculationCompoundingFrequencyType} recalculationRestFrequencyType
 */
GetLoanProductsInterestRecalculationData.prototype['recalculationRestFrequencyType'] = undefined;

/**
 * @member {module:model/GetLoanProductsPreClosureInterestCalculationStrategy} preClosureInterestCalculationStrategy
 */
GetLoanProductsInterestRecalculationData.prototype['preClosureInterestCalculationStrategy'] = undefined;

/**
 * @member {Boolean} isArrearsBasedOnOriginalSchedule
 */
GetLoanProductsInterestRecalculationData.prototype['isArrearsBasedOnOriginalSchedule'] = undefined;






export default GetLoanProductsInterestRecalculationData;

