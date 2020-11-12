

import ApiClient from '../ApiClient';
import EnumOptionData from './EnumOptionData';

/**
 * The GetSearchResponse model module.
 * @module model/GetSearchResponse
 * @version 1.0
 */
class GetSearchResponse {
    /**
     * Constructs a new <code>GetSearchResponse</code>.
     * GetSearchResponse
     * @alias module:model/GetSearchResponse
     */
    constructor() { 
        
        GetSearchResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSearchResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSearchResponse} obj Optional instance to populate.
     * @return {module:model/GetSearchResponse} The populated <code>GetSearchResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSearchResponse();

            if (data.hasOwnProperty('entityId')) {
                obj['entityId'] = ApiClient.convertToType(data['entityId'], 'Number');
            }
            if (data.hasOwnProperty('entityAccountNo')) {
                obj['entityAccountNo'] = ApiClient.convertToType(data['entityAccountNo'], 'Number');
            }
            if (data.hasOwnProperty('entityExternalId')) {
                obj['entityExternalId'] = ApiClient.convertToType(data['entityExternalId'], 'String');
            }
            if (data.hasOwnProperty('entityName')) {
                obj['entityName'] = ApiClient.convertToType(data['entityName'], 'String');
            }
            if (data.hasOwnProperty('entityType')) {
                obj['entityType'] = ApiClient.convertToType(data['entityType'], 'String');
            }
            if (data.hasOwnProperty('parentId')) {
                obj['parentId'] = ApiClient.convertToType(data['parentId'], 'Number');
            }
            if (data.hasOwnProperty('parentName')) {
                obj['parentName'] = ApiClient.convertToType(data['parentName'], 'String');
            }
            if (data.hasOwnProperty('entityStatus')) {
                obj['entityStatus'] = EnumOptionData.constructFromObject(data['entityStatus']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} entityId
 */
GetSearchResponse.prototype['entityId'] = undefined;

/**
 * @member {Number} entityAccountNo
 */
GetSearchResponse.prototype['entityAccountNo'] = undefined;

/**
 * @member {String} entityExternalId
 */
GetSearchResponse.prototype['entityExternalId'] = undefined;

/**
 * @member {String} entityName
 */
GetSearchResponse.prototype['entityName'] = undefined;

/**
 * @member {String} entityType
 */
GetSearchResponse.prototype['entityType'] = undefined;

/**
 * @member {Number} parentId
 */
GetSearchResponse.prototype['parentId'] = undefined;

/**
 * @member {String} parentName
 */
GetSearchResponse.prototype['parentName'] = undefined;

/**
 * @member {module:model/EnumOptionData} entityStatus
 */
GetSearchResponse.prototype['entityStatus'] = undefined;






export default GetSearchResponse;

