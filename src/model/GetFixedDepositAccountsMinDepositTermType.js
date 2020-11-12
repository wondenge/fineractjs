

import ApiClient from '../ApiClient';

/**
 * The GetFixedDepositAccountsMinDepositTermType model module.
 * @module model/GetFixedDepositAccountsMinDepositTermType
 * @version 1.0
 */
class GetFixedDepositAccountsMinDepositTermType {
    /**
     * Constructs a new <code>GetFixedDepositAccountsMinDepositTermType</code>.
     * @alias module:model/GetFixedDepositAccountsMinDepositTermType
     */
    constructor() { 
        
        GetFixedDepositAccountsMinDepositTermType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetFixedDepositAccountsMinDepositTermType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetFixedDepositAccountsMinDepositTermType} obj Optional instance to populate.
     * @return {module:model/GetFixedDepositAccountsMinDepositTermType} The populated <code>GetFixedDepositAccountsMinDepositTermType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetFixedDepositAccountsMinDepositTermType();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetFixedDepositAccountsMinDepositTermType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetFixedDepositAccountsMinDepositTermType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetFixedDepositAccountsMinDepositTermType.prototype['description'] = undefined;






export default GetFixedDepositAccountsMinDepositTermType;

