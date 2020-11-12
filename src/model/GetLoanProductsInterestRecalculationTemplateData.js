  

import ApiClient from '../ApiClient';
import GetLoanProductsInterestRecalculationCompoundingType from './GetLoanProductsInterestRecalculationCompoundingType';
import GetLoanProductsPreClosureInterestCalculationStrategy from './GetLoanProductsPreClosureInterestCalculationStrategy';
import GetLoanProductsRescheduleStrategyType from './GetLoanProductsRescheduleStrategyType';

/**
 * The GetLoanProductsInterestRecalculationTemplateData model module.
 * @module model/GetLoanProductsInterestRecalculationTemplateData
 * @version 1.0
 */
class GetLoanProductsInterestRecalculationTemplateData {
    /**
     * Constructs a new <code>GetLoanProductsInterestRecalculationTemplateData</code>.
     * @alias module:model/GetLoanProductsInterestRecalculationTemplateData
     */
    constructor() { 
        
        GetLoanProductsInterestRecalculationTemplateData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetLoanProductsInterestRecalculationTemplateData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLoanProductsInterestRecalculationTemplateData} obj Optional instance to populate.
     * @return {module:model/GetLoanProductsInterestRecalculationTemplateData} The populated <code>GetLoanProductsInterestRecalculationTemplateData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLoanProductsInterestRecalculationTemplateData();

            if (data.hasOwnProperty('interestRecalculationCompoundingType')) {
                obj['interestRecalculationCompoundingType'] = GetLoanProductsInterestRecalculationCompoundingType.constructFromObject(data['interestRecalculationCompoundingType']);
            }
            if (data.hasOwnProperty('rescheduleStrategyType')) {
                obj['rescheduleStrategyType'] = GetLoanProductsRescheduleStrategyType.constructFromObject(data['rescheduleStrategyType']);
            }
            if (data.hasOwnProperty('preClosureInterestCalculationStrategy')) {
                obj['preClosureInterestCalculationStrategy'] = GetLoanProductsPreClosureInterestCalculationStrategy.constructFromObject(data['preClosureInterestCalculationStrategy']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/GetLoanProductsInterestRecalculationCompoundingType} interestRecalculationCompoundingType
 */
GetLoanProductsInterestRecalculationTemplateData.prototype['interestRecalculationCompoundingType'] = undefined;

/**
 * @member {module:model/GetLoanProductsRescheduleStrategyType} rescheduleStrategyType
 */
GetLoanProductsInterestRecalculationTemplateData.prototype['rescheduleStrategyType'] = undefined;

/**
 * @member {module:model/GetLoanProductsPreClosureInterestCalculationStrategy} preClosureInterestCalculationStrategy
 */
GetLoanProductsInterestRecalculationTemplateData.prototype['preClosureInterestCalculationStrategy'] = undefined;






export default GetLoanProductsInterestRecalculationTemplateData;

