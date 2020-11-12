

import ApiClient from '../ApiClient';

/**
 * The GetAccountTransfersFromAccountType model module.
 * @module model/GetAccountTransfersFromAccountType
 * @version 1.0
 */
class GetAccountTransfersFromAccountType {
    /**
     * Constructs a new <code>GetAccountTransfersFromAccountType</code>.
     * @alias module:model/GetAccountTransfersFromAccountType
     */
    constructor() { 
        
        GetAccountTransfersFromAccountType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetAccountTransfersFromAccountType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAccountTransfersFromAccountType} obj Optional instance to populate.
     * @return {module:model/GetAccountTransfersFromAccountType} The populated <code>GetAccountTransfersFromAccountType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetAccountTransfersFromAccountType();

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
GetAccountTransfersFromAccountType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetAccountTransfersFromAccountType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetAccountTransfersFromAccountType.prototype['description'] = undefined;






export default GetAccountTransfersFromAccountType;

