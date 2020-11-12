

import ApiClient from '../ApiClient';

/**
 * The GetLoanProductsTransactionProcessingStrategyOptions model module.
 * @module model/GetLoanProductsTransactionProcessingStrategyOptions
 * @version 1.0
 */
class GetLoanProductsTransactionProcessingStrategyOptions {
    /**
     * Constructs a new <code>GetLoanProductsTransactionProcessingStrategyOptions</code>.
     * @alias module:model/GetLoanProductsTransactionProcessingStrategyOptions
     */
    constructor() { 
        
        GetLoanProductsTransactionProcessingStrategyOptions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetLoanProductsTransactionProcessingStrategyOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLoanProductsTransactionProcessingStrategyOptions} obj Optional instance to populate.
     * @return {module:model/GetLoanProductsTransactionProcessingStrategyOptions} The populated <code>GetLoanProductsTransactionProcessingStrategyOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLoanProductsTransactionProcessingStrategyOptions();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetLoanProductsTransactionProcessingStrategyOptions.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetLoanProductsTransactionProcessingStrategyOptions.prototype['code'] = undefined;

/**
 * @member {String} name
 */
GetLoanProductsTransactionProcessingStrategyOptions.prototype['name'] = undefined;






export default GetLoanProductsTransactionProcessingStrategyOptions;

