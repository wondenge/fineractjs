

import ApiClient from '../ApiClient';

/**
 * The GetFixedDepositAccountsMaxDepositTermType model module.
 * @module model/GetFixedDepositAccountsMaxDepositTermType
 * @version 1.0
 */
class GetFixedDepositAccountsMaxDepositTermType {
    /**
     * Constructs a new <code>GetFixedDepositAccountsMaxDepositTermType</code>.
     * @alias module:model/GetFixedDepositAccountsMaxDepositTermType
     */
    constructor() { 
        
        GetFixedDepositAccountsMaxDepositTermType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetFixedDepositAccountsMaxDepositTermType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetFixedDepositAccountsMaxDepositTermType} obj Optional instance to populate.
     * @return {module:model/GetFixedDepositAccountsMaxDepositTermType} The populated <code>GetFixedDepositAccountsMaxDepositTermType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetFixedDepositAccountsMaxDepositTermType();

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
GetFixedDepositAccountsMaxDepositTermType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetFixedDepositAccountsMaxDepositTermType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetFixedDepositAccountsMaxDepositTermType.prototype['description'] = undefined;






export default GetFixedDepositAccountsMaxDepositTermType;

