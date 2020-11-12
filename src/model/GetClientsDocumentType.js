

import ApiClient from '../ApiClient';

/**
 * The GetClientsDocumentType model module.
 * @module model/GetClientsDocumentType
 * @version 1.0
 */
class GetClientsDocumentType {
    /**
     * Constructs a new <code>GetClientsDocumentType</code>.
     * @alias module:model/GetClientsDocumentType
     */
    constructor() { 
        
        GetClientsDocumentType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetClientsDocumentType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetClientsDocumentType} obj Optional instance to populate.
     * @return {module:model/GetClientsDocumentType} The populated <code>GetClientsDocumentType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetClientsDocumentType();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetClientsDocumentType.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetClientsDocumentType.prototype['name'] = undefined;






export default GetClientsDocumentType;

