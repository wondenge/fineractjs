

import ApiClient from '../ApiClient';
import LoanProductData from './LoanProductData';
import SavingsProductData from './SavingsProductData';

/**
 * The GetEntityDatatableChecksTemplateResponse model module.
 * @module model/GetEntityDatatableChecksTemplateResponse
 * @version 1.0
 */
class GetEntityDatatableChecksTemplateResponse {
    /**
     * Constructs a new <code>GetEntityDatatableChecksTemplateResponse</code>.
     * GetEntityDatatableChecksTemplateResponse
     * @alias module:model/GetEntityDatatableChecksTemplateResponse
     */
    constructor() { 
        
        GetEntityDatatableChecksTemplateResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetEntityDatatableChecksTemplateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetEntityDatatableChecksTemplateResponse} obj Optional instance to populate.
     * @return {module:model/GetEntityDatatableChecksTemplateResponse} The populated <code>GetEntityDatatableChecksTemplateResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetEntityDatatableChecksTemplateResponse();

            if (data.hasOwnProperty('entities')) {
                obj['entities'] = ApiClient.convertToType(data['entities'], ['String']);
            }
            if (data.hasOwnProperty('statusClient')) {
                obj['statusClient'] = ApiClient.convertToType(data['statusClient'], [Object]);
            }
            if (data.hasOwnProperty('statusGroup')) {
                obj['statusGroup'] = ApiClient.convertToType(data['statusGroup'], [Object]);
            }
            if (data.hasOwnProperty('statusSavings')) {
                obj['statusSavings'] = ApiClient.convertToType(data['statusSavings'], [Object]);
            }
            if (data.hasOwnProperty('statusLoans')) {
                obj['statusLoans'] = ApiClient.convertToType(data['statusLoans'], [Object]);
            }
            if (data.hasOwnProperty('datatables')) {
                obj['datatables'] = ApiClient.convertToType(data['datatables'], [Object]);
            }
            if (data.hasOwnProperty('loanProductDatas')) {
                obj['loanProductDatas'] = ApiClient.convertToType(data['loanProductDatas'], [LoanProductData]);
            }
            if (data.hasOwnProperty('savingsProductDatas')) {
                obj['savingsProductDatas'] = ApiClient.convertToType(data['savingsProductDatas'], [SavingsProductData]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<String>} entities
 */
GetEntityDatatableChecksTemplateResponse.prototype['entities'] = undefined;

/**
 * @member {Array.<Object>} statusClient
 */
GetEntityDatatableChecksTemplateResponse.prototype['statusClient'] = undefined;

/**
 * @member {Array.<Object>} statusGroup
 */
GetEntityDatatableChecksTemplateResponse.prototype['statusGroup'] = undefined;

/**
 * @member {Array.<Object>} statusSavings
 */
GetEntityDatatableChecksTemplateResponse.prototype['statusSavings'] = undefined;

/**
 * @member {Array.<Object>} statusLoans
 */
GetEntityDatatableChecksTemplateResponse.prototype['statusLoans'] = undefined;

/**
 * @member {Array.<Object>} datatables
 */
GetEntityDatatableChecksTemplateResponse.prototype['datatables'] = undefined;

/**
 * @member {Array.<module:model/LoanProductData>} loanProductDatas
 */
GetEntityDatatableChecksTemplateResponse.prototype['loanProductDatas'] = undefined;

/**
 * @member {Array.<module:model/SavingsProductData>} savingsProductDatas
 */
GetEntityDatatableChecksTemplateResponse.prototype['savingsProductDatas'] = undefined;






export default GetEntityDatatableChecksTemplateResponse;

