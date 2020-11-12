

import ApiClient from '../ApiClient';
import FinancialActivityData from './FinancialActivityData';
import GLAccountData from './GLAccountData';

/**
 * The GetFinancialActivityAccountsResponse model module.
 * @module model/GetFinancialActivityAccountsResponse
 * @version 1.0
 */
class GetFinancialActivityAccountsResponse {
    /**
     * Constructs a new <code>GetFinancialActivityAccountsResponse</code>.
     * GetFinancialActivityAccountsResponse
     * @alias module:model/GetFinancialActivityAccountsResponse
     */
    constructor() { 
        
        GetFinancialActivityAccountsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetFinancialActivityAccountsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetFinancialActivityAccountsResponse} obj Optional instance to populate.
     * @return {module:model/GetFinancialActivityAccountsResponse} The populated <code>GetFinancialActivityAccountsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetFinancialActivityAccountsResponse();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('financialActivityData')) {
                obj['financialActivityData'] = FinancialActivityData.constructFromObject(data['financialActivityData']);
            }
            if (data.hasOwnProperty('glAccountData')) {
                obj['glAccountData'] = GLAccountData.constructFromObject(data['glAccountData']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetFinancialActivityAccountsResponse.prototype['id'] = undefined;

/**
 * @member {module:model/FinancialActivityData} financialActivityData
 */
GetFinancialActivityAccountsResponse.prototype['financialActivityData'] = undefined;

/**
 * @member {module:model/GLAccountData} glAccountData
 */
GetFinancialActivityAccountsResponse.prototype['glAccountData'] = undefined;






export default GetFinancialActivityAccountsResponse;

