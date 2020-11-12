

import ApiClient from '../ApiClient';

/**
 * The GetAccountTransfersToOfficeOptions model module.
 * @module model/GetAccountTransfersToOfficeOptions
 * @version 1.0
 */
class GetAccountTransfersToOfficeOptions {
    /**
     * Constructs a new <code>GetAccountTransfersToOfficeOptions</code>.
     * @alias module:model/GetAccountTransfersToOfficeOptions
     */
    constructor() { 
        
        GetAccountTransfersToOfficeOptions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetAccountTransfersToOfficeOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAccountTransfersToOfficeOptions} obj Optional instance to populate.
     * @return {module:model/GetAccountTransfersToOfficeOptions} The populated <code>GetAccountTransfersToOfficeOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetAccountTransfersToOfficeOptions();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('nameDecorated')) {
                obj['nameDecorated'] = ApiClient.convertToType(data['nameDecorated'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetAccountTransfersToOfficeOptions.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetAccountTransfersToOfficeOptions.prototype['name'] = undefined;

/**
 * @member {String} nameDecorated
 */
GetAccountTransfersToOfficeOptions.prototype['nameDecorated'] = undefined;






export default GetAccountTransfersToOfficeOptions;

