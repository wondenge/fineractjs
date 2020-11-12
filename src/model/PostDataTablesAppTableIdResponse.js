

import ApiClient from '../ApiClient';

/**
 * The PostDataTablesAppTableIdResponse model module.
 * @module model/PostDataTablesAppTableIdResponse
 * @version 1.0
 */
class PostDataTablesAppTableIdResponse {
    /**
     * Constructs a new <code>PostDataTablesAppTableIdResponse</code>.
     * PostDataTablesAppTableIdResponse 
     * @alias module:model/PostDataTablesAppTableIdResponse
     */
    constructor() { 
        
        PostDataTablesAppTableIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostDataTablesAppTableIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostDataTablesAppTableIdResponse} obj Optional instance to populate.
     * @return {module:model/PostDataTablesAppTableIdResponse} The populated <code>PostDataTablesAppTableIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostDataTablesAppTableIdResponse();

            if (data.hasOwnProperty('resourceId')) {
                obj['resourceId'] = ApiClient.convertToType(data['resourceId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} resourceId
 */
PostDataTablesAppTableIdResponse.prototype['resourceId'] = undefined;






export default PostDataTablesAppTableIdResponse;

