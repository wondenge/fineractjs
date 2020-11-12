

import ApiClient from '../ApiClient';

/**
 * The GetFixedDepositAccountsInterestPostingPeriodType model module.
 * @module model/GetFixedDepositAccountsInterestPostingPeriodType
 * @version 1.0
 */
class GetFixedDepositAccountsInterestPostingPeriodType {
    /**
     * Constructs a new <code>GetFixedDepositAccountsInterestPostingPeriodType</code>.
     * @alias module:model/GetFixedDepositAccountsInterestPostingPeriodType
     */
    constructor() { 
        
        GetFixedDepositAccountsInterestPostingPeriodType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetFixedDepositAccountsInterestPostingPeriodType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetFixedDepositAccountsInterestPostingPeriodType} obj Optional instance to populate.
     * @return {module:model/GetFixedDepositAccountsInterestPostingPeriodType} The populated <code>GetFixedDepositAccountsInterestPostingPeriodType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetFixedDepositAccountsInterestPostingPeriodType();

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
GetFixedDepositAccountsInterestPostingPeriodType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetFixedDepositAccountsInterestPostingPeriodType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetFixedDepositAccountsInterestPostingPeriodType.prototype['description'] = undefined;






export default GetFixedDepositAccountsInterestPostingPeriodType;

