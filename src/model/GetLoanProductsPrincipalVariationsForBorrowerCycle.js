

import ApiClient from '../ApiClient';
import GetLoanProductsParamType from './GetLoanProductsParamType';
import GetLoanProductsValueConditionType from './GetLoanProductsValueConditionType';

/**
 * The GetLoanProductsPrincipalVariationsForBorrowerCycle model module.
 * @module model/GetLoanProductsPrincipalVariationsForBorrowerCycle
 * @version 1.0
 */
class GetLoanProductsPrincipalVariationsForBorrowerCycle {
    /**
     * Constructs a new <code>GetLoanProductsPrincipalVariationsForBorrowerCycle</code>.
     * @alias module:model/GetLoanProductsPrincipalVariationsForBorrowerCycle
     */
    constructor() { 
        
        GetLoanProductsPrincipalVariationsForBorrowerCycle.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetLoanProductsPrincipalVariationsForBorrowerCycle</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLoanProductsPrincipalVariationsForBorrowerCycle} obj Optional instance to populate.
     * @return {module:model/GetLoanProductsPrincipalVariationsForBorrowerCycle} The populated <code>GetLoanProductsPrincipalVariationsForBorrowerCycle</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLoanProductsPrincipalVariationsForBorrowerCycle();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('borrowerCycleNumber')) {
                obj['borrowerCycleNumber'] = ApiClient.convertToType(data['borrowerCycleNumber'], 'Number');
            }
            if (data.hasOwnProperty('paramType')) {
                obj['paramType'] = GetLoanProductsParamType.constructFromObject(data['paramType']);
            }
            if (data.hasOwnProperty('valueConditionType')) {
                obj['valueConditionType'] = GetLoanProductsValueConditionType.constructFromObject(data['valueConditionType']);
            }
            if (data.hasOwnProperty('minValue')) {
                obj['minValue'] = ApiClient.convertToType(data['minValue'], 'Number');
            }
            if (data.hasOwnProperty('maxValue')) {
                obj['maxValue'] = ApiClient.convertToType(data['maxValue'], 'Number');
            }
            if (data.hasOwnProperty('defaultValue')) {
                obj['defaultValue'] = ApiClient.convertToType(data['defaultValue'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetLoanProductsPrincipalVariationsForBorrowerCycle.prototype['id'] = undefined;

/**
 * @member {Number} borrowerCycleNumber
 */
GetLoanProductsPrincipalVariationsForBorrowerCycle.prototype['borrowerCycleNumber'] = undefined;

/**
 * @member {module:model/GetLoanProductsParamType} paramType
 */
GetLoanProductsPrincipalVariationsForBorrowerCycle.prototype['paramType'] = undefined;

/**
 * @member {module:model/GetLoanProductsValueConditionType} valueConditionType
 */
GetLoanProductsPrincipalVariationsForBorrowerCycle.prototype['valueConditionType'] = undefined;

/**
 * @member {Number} minValue
 */
GetLoanProductsPrincipalVariationsForBorrowerCycle.prototype['minValue'] = undefined;

/**
 * @member {Number} maxValue
 */
GetLoanProductsPrincipalVariationsForBorrowerCycle.prototype['maxValue'] = undefined;

/**
 * @member {Number} defaultValue
 */
GetLoanProductsPrincipalVariationsForBorrowerCycle.prototype['defaultValue'] = undefined;






export default GetLoanProductsPrincipalVariationsForBorrowerCycle;

