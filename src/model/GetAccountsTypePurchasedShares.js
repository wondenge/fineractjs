

import ApiClient from '../ApiClient';

/**
 * The GetAccountsTypePurchasedShares model module.
 * @module model/GetAccountsTypePurchasedShares
 * @version 1.0
 */
class GetAccountsTypePurchasedShares {
    /**
     * Constructs a new <code>GetAccountsTypePurchasedShares</code>.
     * @alias module:model/GetAccountsTypePurchasedShares
     */
    constructor() { 
        
        GetAccountsTypePurchasedShares.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetAccountsTypePurchasedShares</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAccountsTypePurchasedShares} obj Optional instance to populate.
     * @return {module:model/GetAccountsTypePurchasedShares} The populated <code>GetAccountsTypePurchasedShares</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetAccountsTypePurchasedShares();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('purchasedDate')) {
                obj['purchasedDate'] = ApiClient.convertToType(data['purchasedDate'], 'String');
            }
            if (data.hasOwnProperty('numberOfShares')) {
                obj['numberOfShares'] = ApiClient.convertToType(data['numberOfShares'], 'Number');
            }
            if (data.hasOwnProperty('purchasedPrice')) {
                obj['purchasedPrice'] = ApiClient.convertToType(data['purchasedPrice'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetAccountsTypePurchasedShares.prototype['id'] = undefined;

/**
 * @member {String} purchasedDate
 */
GetAccountsTypePurchasedShares.prototype['purchasedDate'] = undefined;

/**
 * @member {Number} numberOfShares
 */
GetAccountsTypePurchasedShares.prototype['numberOfShares'] = undefined;

/**
 * @member {Number} purchasedPrice
 */
GetAccountsTypePurchasedShares.prototype['purchasedPrice'] = undefined;






export default GetAccountsTypePurchasedShares;

