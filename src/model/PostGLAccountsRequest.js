

import ApiClient from '../ApiClient';
import EnumOptionData from './EnumOptionData';

/**
 * The PostGLAccountsRequest model module.
 * @module model/PostGLAccountsRequest
 * @version 1.0
 */
class PostGLAccountsRequest {
    /**
     * Constructs a new <code>PostGLAccountsRequest</code>.
     * PostGLAccountsRequest
     * @alias module:model/PostGLAccountsRequest
     */
    constructor() { 
        
        PostGLAccountsRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostGLAccountsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostGLAccountsRequest} obj Optional instance to populate.
     * @return {module:model/PostGLAccountsRequest} The populated <code>PostGLAccountsRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostGLAccountsRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('glCode')) {
                obj['glCode'] = ApiClient.convertToType(data['glCode'], 'String');
            }
            if (data.hasOwnProperty('manualEntriesAllowed')) {
                obj['manualEntriesAllowed'] = ApiClient.convertToType(data['manualEntriesAllowed'], 'Boolean');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('tagId')) {
                obj['tagId'] = ApiClient.convertToType(data['tagId'], 'String');
            }
            if (data.hasOwnProperty('parentId')) {
                obj['parentId'] = ApiClient.convertToType(data['parentId'], 'Number');
            }
            if (data.hasOwnProperty('usage')) {
                obj['usage'] = EnumOptionData.constructFromObject(data['usage']);
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
PostGLAccountsRequest.prototype['name'] = undefined;

/**
 * @member {String} glCode
 */
PostGLAccountsRequest.prototype['glCode'] = undefined;

/**
 * @member {Boolean} manualEntriesAllowed
 */
PostGLAccountsRequest.prototype['manualEntriesAllowed'] = undefined;

/**
 * @member {String} type
 */
PostGLAccountsRequest.prototype['type'] = undefined;

/**
 * @member {String} tagId
 */
PostGLAccountsRequest.prototype['tagId'] = undefined;

/**
 * @member {Number} parentId
 */
PostGLAccountsRequest.prototype['parentId'] = undefined;

/**
 * @member {module:model/EnumOptionData} usage
 */
PostGLAccountsRequest.prototype['usage'] = undefined;

/**
 * @member {String} description
 */
PostGLAccountsRequest.prototype['description'] = undefined;






export default PostGLAccountsRequest;

