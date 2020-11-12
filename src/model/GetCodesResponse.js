

import ApiClient from '../ApiClient';

/**
 * The GetCodesResponse model module.
 * @module model/GetCodesResponse
 * @version 1.0
 */
class GetCodesResponse {
    /**
     * Constructs a new <code>GetCodesResponse</code>.
     * GetCodesResponse
     * @alias module:model/GetCodesResponse
     */
    constructor() { 
        
        GetCodesResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetCodesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetCodesResponse} obj Optional instance to populate.
     * @return {module:model/GetCodesResponse} The populated <code>GetCodesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetCodesResponse();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('systemDefined')) {
                obj['systemDefined'] = ApiClient.convertToType(data['systemDefined'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetCodesResponse.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetCodesResponse.prototype['name'] = undefined;

/**
 * @member {Boolean} systemDefined
 */
GetCodesResponse.prototype['systemDefined'] = undefined;






export default GetCodesResponse;

