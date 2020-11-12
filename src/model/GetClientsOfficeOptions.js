

import ApiClient from '../ApiClient';

/**
 * The GetClientsOfficeOptions model module.
 * @module model/GetClientsOfficeOptions
 * @version 1.0
 */
class GetClientsOfficeOptions {
    /**
     * Constructs a new <code>GetClientsOfficeOptions</code>.
     * @alias module:model/GetClientsOfficeOptions
     */
    constructor() { 
        
        GetClientsOfficeOptions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetClientsOfficeOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetClientsOfficeOptions} obj Optional instance to populate.
     * @return {module:model/GetClientsOfficeOptions} The populated <code>GetClientsOfficeOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetClientsOfficeOptions();

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
GetClientsOfficeOptions.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetClientsOfficeOptions.prototype['name'] = undefined;

/**
 * @member {String} nameDecorated
 */
GetClientsOfficeOptions.prototype['nameDecorated'] = undefined;






export default GetClientsOfficeOptions;

