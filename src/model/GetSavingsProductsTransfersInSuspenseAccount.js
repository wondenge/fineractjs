

import ApiClient from '../ApiClient';

/**
 * The GetSavingsProductsTransfersInSuspenseAccount model module.
 * @module model/GetSavingsProductsTransfersInSuspenseAccount
 * @version 1.0
 */
class GetSavingsProductsTransfersInSuspenseAccount {
    /**
     * Constructs a new <code>GetSavingsProductsTransfersInSuspenseAccount</code>.
     * @alias module:model/GetSavingsProductsTransfersInSuspenseAccount
     */
    constructor() { 
        
        GetSavingsProductsTransfersInSuspenseAccount.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSavingsProductsTransfersInSuspenseAccount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSavingsProductsTransfersInSuspenseAccount} obj Optional instance to populate.
     * @return {module:model/GetSavingsProductsTransfersInSuspenseAccount} The populated <code>GetSavingsProductsTransfersInSuspenseAccount</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSavingsProductsTransfersInSuspenseAccount();

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
GetSavingsProductsTransfersInSuspenseAccount.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetSavingsProductsTransfersInSuspenseAccount.prototype['name'] = undefined;

/**
 * @member {Number} glCode
 */
GetSavingsProductsTransfersInSuspenseAccount.prototype['glCode'] = undefined;






export default GetSavingsProductsTransfersInSuspenseAccount;

