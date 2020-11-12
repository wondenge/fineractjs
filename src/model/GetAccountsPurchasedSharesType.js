

import ApiClient from '../ApiClient';

/**
 * The GetAccountsPurchasedSharesType model module.
 * @module model/GetAccountsPurchasedSharesType
 * @version 1.0
 */
class GetAccountsPurchasedSharesType {
    /**
     * Constructs a new <code>GetAccountsPurchasedSharesType</code>.
     * @alias module:model/GetAccountsPurchasedSharesType
     */
    constructor() { 
        
        GetAccountsPurchasedSharesType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetAccountsPurchasedSharesType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAccountsPurchasedSharesType} obj Optional instance to populate.
     * @return {module:model/GetAccountsPurchasedSharesType} The populated <code>GetAccountsPurchasedSharesType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetAccountsPurchasedSharesType();

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
GetAccountsPurchasedSharesType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetAccountsPurchasedSharesType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetAccountsPurchasedSharesType.prototype['description'] = undefined;






export default GetAccountsPurchasedSharesType;

