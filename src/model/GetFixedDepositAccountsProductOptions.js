

import ApiClient from '../ApiClient';

/**
 * The GetFixedDepositAccountsProductOptions model module.
 * @module model/GetFixedDepositAccountsProductOptions
 * @version 1.0
 */
class GetFixedDepositAccountsProductOptions {
    /**
     * Constructs a new <code>GetFixedDepositAccountsProductOptions</code>.
     * @alias module:model/GetFixedDepositAccountsProductOptions
     */
    constructor() { 
        
        GetFixedDepositAccountsProductOptions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetFixedDepositAccountsProductOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetFixedDepositAccountsProductOptions} obj Optional instance to populate.
     * @return {module:model/GetFixedDepositAccountsProductOptions} The populated <code>GetFixedDepositAccountsProductOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetFixedDepositAccountsProductOptions();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
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
GetFixedDepositAccountsProductOptions.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetFixedDepositAccountsProductOptions.prototype['name'] = undefined;






export default GetFixedDepositAccountsProductOptions;

