

import ApiClient from '../ApiClient';
import GetCollateralCurrencyResponse from './GetCollateralCurrencyResponse';
import GetCollateralTypeResponse from './GetCollateralTypeResponse';

/**
 * The GetLoansLoanIdCollateralsResponse model module.
 * @module model/GetLoansLoanIdCollateralsResponse
 * @version 1.0
 */
class GetLoansLoanIdCollateralsResponse {
    /**
     * Constructs a new <code>GetLoansLoanIdCollateralsResponse</code>.
     * GetLoansLoanIdCollateralsResponse
     * @alias module:model/GetLoansLoanIdCollateralsResponse
     */
    constructor() { 
        
        GetLoansLoanIdCollateralsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetLoansLoanIdCollateralsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLoansLoanIdCollateralsResponse} obj Optional instance to populate.
     * @return {module:model/GetLoansLoanIdCollateralsResponse} The populated <code>GetLoansLoanIdCollateralsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLoansLoanIdCollateralsResponse();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = GetCollateralTypeResponse.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = GetCollateralCurrencyResponse.constructFromObject(data['currency']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetLoansLoanIdCollateralsResponse.prototype['id'] = undefined;

/**
 * @member {module:model/GetCollateralTypeResponse} type
 */
GetLoansLoanIdCollateralsResponse.prototype['type'] = undefined;

/**
 * @member {Number} value
 */
GetLoansLoanIdCollateralsResponse.prototype['value'] = undefined;

/**
 * @member {String} description
 */
GetLoansLoanIdCollateralsResponse.prototype['description'] = undefined;

/**
 * @member {module:model/GetCollateralCurrencyResponse} currency
 */
GetLoansLoanIdCollateralsResponse.prototype['currency'] = undefined;






export default GetLoansLoanIdCollateralsResponse;

