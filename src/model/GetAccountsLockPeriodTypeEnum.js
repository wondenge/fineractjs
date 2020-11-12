

import ApiClient from '../ApiClient';

/**
 * The GetAccountsLockPeriodTypeEnum model module.
 * @module model/GetAccountsLockPeriodTypeEnum
 * @version 1.0
 */
class GetAccountsLockPeriodTypeEnum {
    /**
     * Constructs a new <code>GetAccountsLockPeriodTypeEnum</code>.
     * @alias module:model/GetAccountsLockPeriodTypeEnum
     */
    constructor() { 
        
        GetAccountsLockPeriodTypeEnum.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetAccountsLockPeriodTypeEnum</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAccountsLockPeriodTypeEnum} obj Optional instance to populate.
     * @return {module:model/GetAccountsLockPeriodTypeEnum} The populated <code>GetAccountsLockPeriodTypeEnum</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetAccountsLockPeriodTypeEnum();

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
GetAccountsLockPeriodTypeEnum.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetAccountsLockPeriodTypeEnum.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetAccountsLockPeriodTypeEnum.prototype['description'] = undefined;






export default GetAccountsLockPeriodTypeEnum;

