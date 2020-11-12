

import ApiClient from '../ApiClient';

/**
 * The GetOfficesResponse model module.
 * @module model/GetOfficesResponse
 * @version 1.0
 */
class GetOfficesResponse {
    /**
     * Constructs a new <code>GetOfficesResponse</code>.
     * GetOfficesResponse
     * @alias module:model/GetOfficesResponse
     */
    constructor() { 
        
        GetOfficesResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetOfficesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetOfficesResponse} obj Optional instance to populate.
     * @return {module:model/GetOfficesResponse} The populated <code>GetOfficesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetOfficesResponse();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('nameDecorated')) {
                obj['nameDecorated'] = ApiClient.convertToType(data['nameDecorated'], 'String');
            }
            if (data.hasOwnProperty('externalId')) {
                obj['externalId'] = ApiClient.convertToType(data['externalId'], 'String');
            }
            if (data.hasOwnProperty('openingDate')) {
                obj['openingDate'] = ApiClient.convertToType(data['openingDate'], 'Date');
            }
            if (data.hasOwnProperty('hierarchy')) {
                obj['hierarchy'] = ApiClient.convertToType(data['hierarchy'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetOfficesResponse.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetOfficesResponse.prototype['name'] = undefined;

/**
 * @member {String} nameDecorated
 */
GetOfficesResponse.prototype['nameDecorated'] = undefined;

/**
 * @member {String} externalId
 */
GetOfficesResponse.prototype['externalId'] = undefined;

/**
 * @member {Date} openingDate
 */
GetOfficesResponse.prototype['openingDate'] = undefined;

/**
 * @member {String} hierarchy
 */
GetOfficesResponse.prototype['hierarchy'] = undefined;






export default GetOfficesResponse;

