

import ApiClient from '../ApiClient';

/**
 * The GetShareAccountsIncomeFromFeeAccountId model module.
 * @module model/GetShareAccountsIncomeFromFeeAccountId
 * @version 1.0
 */
class GetShareAccountsIncomeFromFeeAccountId {
    /**
     * Constructs a new <code>GetShareAccountsIncomeFromFeeAccountId</code>.
     * @alias module:model/GetShareAccountsIncomeFromFeeAccountId
     */
    constructor() { 
        
        GetShareAccountsIncomeFromFeeAccountId.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetShareAccountsIncomeFromFeeAccountId</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetShareAccountsIncomeFromFeeAccountId} obj Optional instance to populate.
     * @return {module:model/GetShareAccountsIncomeFromFeeAccountId} The populated <code>GetShareAccountsIncomeFromFeeAccountId</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetShareAccountsIncomeFromFeeAccountId();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('glCode')) {
                obj['glCode'] = ApiClient.convertToType(data['glCode'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetShareAccountsIncomeFromFeeAccountId.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetShareAccountsIncomeFromFeeAccountId.prototype['name'] = undefined;

/**
 * @member {Number} glCode
 */
GetShareAccountsIncomeFromFeeAccountId.prototype['glCode'] = undefined;






export default GetShareAccountsIncomeFromFeeAccountId;

