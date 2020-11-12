

import ApiClient from '../ApiClient';

/**
 * The GetAccountsPurchasedSharesStatus model module.
 * @module model/GetAccountsPurchasedSharesStatus
 * @version 1.0
 */
class GetAccountsPurchasedSharesStatus {
    /**
     * Constructs a new <code>GetAccountsPurchasedSharesStatus</code>.
     * @alias module:model/GetAccountsPurchasedSharesStatus
     */
    constructor() { 
        
        GetAccountsPurchasedSharesStatus.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetAccountsPurchasedSharesStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAccountsPurchasedSharesStatus} obj Optional instance to populate.
     * @return {module:model/GetAccountsPurchasedSharesStatus} The populated <code>GetAccountsPurchasedSharesStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetAccountsPurchasedSharesStatus();

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
GetAccountsPurchasedSharesStatus.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetAccountsPurchasedSharesStatus.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetAccountsPurchasedSharesStatus.prototype['description'] = undefined;






export default GetAccountsPurchasedSharesStatus;

