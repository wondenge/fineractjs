

import ApiClient from '../ApiClient';

/**
 * The GetAccountTransfersFromOfficeOptions model module.
 * @module model/GetAccountTransfersFromOfficeOptions
 * @version 1.0
 */
class GetAccountTransfersFromOfficeOptions {
    /**
     * Constructs a new <code>GetAccountTransfersFromOfficeOptions</code>.
     * @alias module:model/GetAccountTransfersFromOfficeOptions
     */
    constructor() { 
        
        GetAccountTransfersFromOfficeOptions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetAccountTransfersFromOfficeOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAccountTransfersFromOfficeOptions} obj Optional instance to populate.
     * @return {module:model/GetAccountTransfersFromOfficeOptions} The populated <code>GetAccountTransfersFromOfficeOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetAccountTransfersFromOfficeOptions();

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
GetAccountTransfersFromOfficeOptions.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetAccountTransfersFromOfficeOptions.prototype['name'] = undefined;

/**
 * @member {String} nameDecorated
 */
GetAccountTransfersFromOfficeOptions.prototype['nameDecorated'] = undefined;






export default GetAccountTransfersFromOfficeOptions;

