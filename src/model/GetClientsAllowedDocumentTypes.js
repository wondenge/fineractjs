

import ApiClient from '../ApiClient';

/**
 * The GetClientsAllowedDocumentTypes model module.
 * @module model/GetClientsAllowedDocumentTypes
 * @version 1.0
 */
class GetClientsAllowedDocumentTypes {
    /**
     * Constructs a new <code>GetClientsAllowedDocumentTypes</code>.
     * @alias module:model/GetClientsAllowedDocumentTypes
     */
    constructor() { 
        
        GetClientsAllowedDocumentTypes.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetClientsAllowedDocumentTypes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetClientsAllowedDocumentTypes} obj Optional instance to populate.
     * @return {module:model/GetClientsAllowedDocumentTypes} The populated <code>GetClientsAllowedDocumentTypes</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetClientsAllowedDocumentTypes();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('position')) {
                obj['position'] = ApiClient.convertToType(data['position'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetClientsAllowedDocumentTypes.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetClientsAllowedDocumentTypes.prototype['name'] = undefined;

/**
 * @member {Number} position
 */
GetClientsAllowedDocumentTypes.prototype['position'] = undefined;






export default GetClientsAllowedDocumentTypes;

