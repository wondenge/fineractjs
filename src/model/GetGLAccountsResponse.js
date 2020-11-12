

import ApiClient from '../ApiClient';
import CodeValueData from './CodeValueData';
import EnumOptionData from './EnumOptionData';

/**
 * The GetGLAccountsResponse model module.
 * @module model/GetGLAccountsResponse
 * @version 1.0
 */
class GetGLAccountsResponse {
    /**
     * Constructs a new <code>GetGLAccountsResponse</code>.
     * GetGLAccountsResponse
     * @alias module:model/GetGLAccountsResponse
     */
    constructor() { 
        
        GetGLAccountsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetGLAccountsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetGLAccountsResponse} obj Optional instance to populate.
     * @return {module:model/GetGLAccountsResponse} The populated <code>GetGLAccountsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetGLAccountsResponse();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('parentId')) {
                obj['parentId'] = ApiClient.convertToType(data['parentId'], 'Number');
            }
            if (data.hasOwnProperty('glCode')) {
                obj['glCode'] = ApiClient.convertToType(data['glCode'], 'String');
            }
            if (data.hasOwnProperty('disabled')) {
                obj['disabled'] = ApiClient.convertToType(data['disabled'], 'Boolean');
            }
            if (data.hasOwnProperty('manualEntriesAllowed')) {
                obj['manualEntriesAllowed'] = ApiClient.convertToType(data['manualEntriesAllowed'], 'Boolean');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = EnumOptionData.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('usage')) {
                obj['usage'] = EnumOptionData.constructFromObject(data['usage']);
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('nameDecorated')) {
                obj['nameDecorated'] = ApiClient.convertToType(data['nameDecorated'], 'String');
            }
            if (data.hasOwnProperty('tagId')) {
                obj['tagId'] = CodeValueData.constructFromObject(data['tagId']);
            }
            if (data.hasOwnProperty('organizationRunningBalance')) {
                obj['organizationRunningBalance'] = ApiClient.convertToType(data['organizationRunningBalance'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetGLAccountsResponse.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetGLAccountsResponse.prototype['name'] = undefined;

/**
 * @member {Number} parentId
 */
GetGLAccountsResponse.prototype['parentId'] = undefined;

/**
 * @member {String} glCode
 */
GetGLAccountsResponse.prototype['glCode'] = undefined;

/**
 * @member {Boolean} disabled
 */
GetGLAccountsResponse.prototype['disabled'] = undefined;

/**
 * @member {Boolean} manualEntriesAllowed
 */
GetGLAccountsResponse.prototype['manualEntriesAllowed'] = undefined;

/**
 * @member {module:model/EnumOptionData} type
 */
GetGLAccountsResponse.prototype['type'] = undefined;

/**
 * @member {module:model/EnumOptionData} usage
 */
GetGLAccountsResponse.prototype['usage'] = undefined;

/**
 * @member {String} description
 */
GetGLAccountsResponse.prototype['description'] = undefined;

/**
 * @member {String} nameDecorated
 */
GetGLAccountsResponse.prototype['nameDecorated'] = undefined;

/**
 * @member {module:model/CodeValueData} tagId
 */
GetGLAccountsResponse.prototype['tagId'] = undefined;

/**
 * @member {Number} organizationRunningBalance
 */
GetGLAccountsResponse.prototype['organizationRunningBalance'] = undefined;






export default GetGLAccountsResponse;

