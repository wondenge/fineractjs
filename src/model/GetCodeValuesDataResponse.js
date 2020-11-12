

import ApiClient from '../ApiClient';

/**
 * The GetCodeValuesDataResponse model module.
 * @module model/GetCodeValuesDataResponse
 * @version 1.0
 */
class GetCodeValuesDataResponse {
    /**
     * Constructs a new <code>GetCodeValuesDataResponse</code>.
     * GetCodeValuesDataResponse
     * @alias module:model/GetCodeValuesDataResponse
     */
    constructor() { 
        
        GetCodeValuesDataResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetCodeValuesDataResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetCodeValuesDataResponse} obj Optional instance to populate.
     * @return {module:model/GetCodeValuesDataResponse} The populated <code>GetCodeValuesDataResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetCodeValuesDataResponse();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
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
GetCodeValuesDataResponse.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetCodeValuesDataResponse.prototype['name'] = undefined;

/**
 * @member {String} description
 */
GetCodeValuesDataResponse.prototype['description'] = undefined;

/**
 * @member {Number} position
 */
GetCodeValuesDataResponse.prototype['position'] = undefined;






export default GetCodeValuesDataResponse;

