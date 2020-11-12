

import ApiClient from '../ApiClient';

/**
 * The GetFixedDepositProductsProductIdTransfersInSuspenseAccount model module.
 * @module model/GetFixedDepositProductsProductIdTransfersInSuspenseAccount
 * @version 1.0
 */
class GetFixedDepositProductsProductIdTransfersInSuspenseAccount {
    /**
     * Constructs a new <code>GetFixedDepositProductsProductIdTransfersInSuspenseAccount</code>.
     * @alias module:model/GetFixedDepositProductsProductIdTransfersInSuspenseAccount
     */
    constructor() { 
        
        GetFixedDepositProductsProductIdTransfersInSuspenseAccount.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetFixedDepositProductsProductIdTransfersInSuspenseAccount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetFixedDepositProductsProductIdTransfersInSuspenseAccount} obj Optional instance to populate.
     * @return {module:model/GetFixedDepositProductsProductIdTransfersInSuspenseAccount} The populated <code>GetFixedDepositProductsProductIdTransfersInSuspenseAccount</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetFixedDepositProductsProductIdTransfersInSuspenseAccount();

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
GetFixedDepositProductsProductIdTransfersInSuspenseAccount.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetFixedDepositProductsProductIdTransfersInSuspenseAccount.prototype['name'] = undefined;

/**
 * @member {Number} glCode
 */
GetFixedDepositProductsProductIdTransfersInSuspenseAccount.prototype['glCode'] = undefined;






export default GetFixedDepositProductsProductIdTransfersInSuspenseAccount;

