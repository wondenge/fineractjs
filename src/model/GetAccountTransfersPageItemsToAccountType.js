

import ApiClient from '../ApiClient';

/**
 * The GetAccountTransfersPageItemsToAccountType model module.
 * @module model/GetAccountTransfersPageItemsToAccountType
 * @version 1.0
 */
class GetAccountTransfersPageItemsToAccountType {
    /**
     * Constructs a new <code>GetAccountTransfersPageItemsToAccountType</code>.
     * @alias module:model/GetAccountTransfersPageItemsToAccountType
     */
    constructor() { 
        
        GetAccountTransfersPageItemsToAccountType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetAccountTransfersPageItemsToAccountType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAccountTransfersPageItemsToAccountType} obj Optional instance to populate.
     * @return {module:model/GetAccountTransfersPageItemsToAccountType} The populated <code>GetAccountTransfersPageItemsToAccountType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetAccountTransfersPageItemsToAccountType();

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
GetAccountTransfersPageItemsToAccountType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetAccountTransfersPageItemsToAccountType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetAccountTransfersPageItemsToAccountType.prototype['description'] = undefined;






export default GetAccountTransfersPageItemsToAccountType;

