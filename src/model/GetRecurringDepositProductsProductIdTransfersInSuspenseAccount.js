

import ApiClient from '../ApiClient';

/**
 * The GetRecurringDepositProductsProductIdTransfersInSuspenseAccount model module.
 * @module model/GetRecurringDepositProductsProductIdTransfersInSuspenseAccount
 * @version 1.0
 */
class GetRecurringDepositProductsProductIdTransfersInSuspenseAccount {
    /**
     * Constructs a new <code>GetRecurringDepositProductsProductIdTransfersInSuspenseAccount</code>.
     * @alias module:model/GetRecurringDepositProductsProductIdTransfersInSuspenseAccount
     */
    constructor() { 
        
        GetRecurringDepositProductsProductIdTransfersInSuspenseAccount.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetRecurringDepositProductsProductIdTransfersInSuspenseAccount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetRecurringDepositProductsProductIdTransfersInSuspenseAccount} obj Optional instance to populate.
     * @return {module:model/GetRecurringDepositProductsProductIdTransfersInSuspenseAccount} The populated <code>GetRecurringDepositProductsProductIdTransfersInSuspenseAccount</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetRecurringDepositProductsProductIdTransfersInSuspenseAccount();

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
GetRecurringDepositProductsProductIdTransfersInSuspenseAccount.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetRecurringDepositProductsProductIdTransfersInSuspenseAccount.prototype['name'] = undefined;

/**
 * @member {Number} glCode
 */
GetRecurringDepositProductsProductIdTransfersInSuspenseAccount.prototype['glCode'] = undefined;






export default GetRecurringDepositProductsProductIdTransfersInSuspenseAccount;

