

import ApiClient from '../ApiClient';

/**
 * The GetFixedDepositAccountsInterestCalculationType model module.
 * @module model/GetFixedDepositAccountsInterestCalculationType
 * @version 1.0
 */
class GetFixedDepositAccountsInterestCalculationType {
    /**
     * Constructs a new <code>GetFixedDepositAccountsInterestCalculationType</code>.
     * @alias module:model/GetFixedDepositAccountsInterestCalculationType
     */
    constructor() { 
        
        GetFixedDepositAccountsInterestCalculationType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetFixedDepositAccountsInterestCalculationType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetFixedDepositAccountsInterestCalculationType} obj Optional instance to populate.
     * @return {module:model/GetFixedDepositAccountsInterestCalculationType} The populated <code>GetFixedDepositAccountsInterestCalculationType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetFixedDepositAccountsInterestCalculationType();

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
GetFixedDepositAccountsInterestCalculationType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetFixedDepositAccountsInterestCalculationType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetFixedDepositAccountsInterestCalculationType.prototype['description'] = undefined;






export default GetFixedDepositAccountsInterestCalculationType;

