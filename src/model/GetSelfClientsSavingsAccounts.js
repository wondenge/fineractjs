

import ApiClient from '../ApiClient';
import GetSelfClientsSavingsAccountsCurrency from './GetSelfClientsSavingsAccountsCurrency';
import GetSelfClientsSavingsAccountsStatus from './GetSelfClientsSavingsAccountsStatus';

/**
 * The GetSelfClientsSavingsAccounts model module.
 * @module model/GetSelfClientsSavingsAccounts
 * @version 1.0
 */
class GetSelfClientsSavingsAccounts {
    /**
     * Constructs a new <code>GetSelfClientsSavingsAccounts</code>.
     * @alias module:model/GetSelfClientsSavingsAccounts
     */
    constructor() { 
        
        GetSelfClientsSavingsAccounts.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSelfClientsSavingsAccounts</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSelfClientsSavingsAccounts} obj Optional instance to populate.
     * @return {module:model/GetSelfClientsSavingsAccounts} The populated <code>GetSelfClientsSavingsAccounts</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSelfClientsSavingsAccounts();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('accountNo')) {
                obj['accountNo'] = ApiClient.convertToType(data['accountNo'], 'Number');
            }
            if (data.hasOwnProperty('productId')) {
                obj['productId'] = ApiClient.convertToType(data['productId'], 'Number');
            }
            if (data.hasOwnProperty('productName')) {
                obj['productName'] = ApiClient.convertToType(data['productName'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = GetSelfClientsSavingsAccountsStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = GetSelfClientsSavingsAccountsCurrency.constructFromObject(data['currency']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetSelfClientsSavingsAccounts.prototype['id'] = undefined;

/**
 * @member {Number} accountNo
 */
GetSelfClientsSavingsAccounts.prototype['accountNo'] = undefined;

/**
 * @member {Number} productId
 */
GetSelfClientsSavingsAccounts.prototype['productId'] = undefined;

/**
 * @member {String} productName
 */
GetSelfClientsSavingsAccounts.prototype['productName'] = undefined;

/**
 * @member {module:model/GetSelfClientsSavingsAccountsStatus} status
 */
GetSelfClientsSavingsAccounts.prototype['status'] = undefined;

/**
 * @member {module:model/GetSelfClientsSavingsAccountsCurrency} currency
 */
GetSelfClientsSavingsAccounts.prototype['currency'] = undefined;






export default GetSelfClientsSavingsAccounts;

