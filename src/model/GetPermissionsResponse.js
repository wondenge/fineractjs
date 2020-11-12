

import ApiClient from '../ApiClient';

/**
 * The GetPermissionsResponse model module.
 * @module model/GetPermissionsResponse
 * @version 1.0
 */
class GetPermissionsResponse {
    /**
     * Constructs a new <code>GetPermissionsResponse</code>.
     * GetPermissionsResponse
     * @alias module:model/GetPermissionsResponse
     */
    constructor() { 
        
        GetPermissionsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetPermissionsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetPermissionsResponse} obj Optional instance to populate.
     * @return {module:model/GetPermissionsResponse} The populated <code>GetPermissionsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetPermissionsResponse();

            if (data.hasOwnProperty('grouping')) {
                obj['grouping'] = ApiClient.convertToType(data['grouping'], 'String');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('entityName')) {
                obj['entityName'] = ApiClient.convertToType(data['entityName'], 'String');
            }
            if (data.hasOwnProperty('actionName')) {
                obj['actionName'] = ApiClient.convertToType(data['actionName'], 'String');
            }
            if (data.hasOwnProperty('selected')) {
                obj['selected'] = ApiClient.convertToType(data['selected'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {String} grouping
 */
GetPermissionsResponse.prototype['grouping'] = undefined;

/**
 * @member {String} code
 */
GetPermissionsResponse.prototype['code'] = undefined;

/**
 * @member {String} entityName
 */
GetPermissionsResponse.prototype['entityName'] = undefined;

/**
 * @member {String} actionName
 */
GetPermissionsResponse.prototype['actionName'] = undefined;

/**
 * @member {Boolean} selected
 */
GetPermissionsResponse.prototype['selected'] = undefined;






export default GetPermissionsResponse;

