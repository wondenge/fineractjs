

import ApiClient from '../ApiClient';

/**
 * The GetCentersOfficeOptions model module.
 * @module model/GetCentersOfficeOptions
 * @version 1.0
 */
class GetCentersOfficeOptions {
    /**
     * Constructs a new <code>GetCentersOfficeOptions</code>.
     * @alias module:model/GetCentersOfficeOptions
     */
    constructor() { 
        
        GetCentersOfficeOptions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetCentersOfficeOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetCentersOfficeOptions} obj Optional instance to populate.
     * @return {module:model/GetCentersOfficeOptions} The populated <code>GetCentersOfficeOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetCentersOfficeOptions();

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
GetCentersOfficeOptions.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetCentersOfficeOptions.prototype['name'] = undefined;

/**
 * @member {String} nameDecorated
 */
GetCentersOfficeOptions.prototype['nameDecorated'] = undefined;






export default GetCentersOfficeOptions;

