

import ApiClient from '../ApiClient';
import GetClientsSavingsAccountsCurrency from './GetClientsSavingsAccountsCurrency';
import GetClientsSavingsAccountsStatus from './GetClientsSavingsAccountsStatus';

/**
 * The GetClientsSavingsAccounts model module.
 * @module model/GetClientsSavingsAccounts
 * @version 1.0
 */
class GetClientsSavingsAccounts {
    /**
     * Constructs a new <code>GetClientsSavingsAccounts</code>.
     * @alias module:model/GetClientsSavingsAccounts
     */
    constructor() { 
        
        GetClientsSavingsAccounts.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetClientsSavingsAccounts</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetClientsSavingsAccounts} obj Optional instance to populate.
     * @return {module:model/GetClientsSavingsAccounts} The populated <code>GetClientsSavingsAccounts</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetClientsSavingsAccounts();

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
                obj['status'] = GetClientsSavingsAccountsStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = GetClientsSavingsAccountsCurrency.constructFromObject(data['currency']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetClientsSavingsAccounts.prototype['id'] = undefined;

/**
 * @member {Number} accountNo
 */
GetClientsSavingsAccounts.prototype['accountNo'] = undefined;

/**
 * @member {Number} productId
 */
GetClientsSavingsAccounts.prototype['productId'] = undefined;

/**
 * @member {String} productName
 */
GetClientsSavingsAccounts.prototype['productName'] = undefined;

/**
 * @member {module:model/GetClientsSavingsAccountsStatus} status
 */
GetClientsSavingsAccounts.prototype['status'] = undefined;

/**
 * @member {module:model/GetClientsSavingsAccountsCurrency} currency
 */
GetClientsSavingsAccounts.prototype['currency'] = undefined;






export default GetClientsSavingsAccounts;

