

import ApiClient from '../ApiClient';

/**
 * The PostDataTablesResponse model module.
 * @module model/PostDataTablesResponse
 * @version 1.0
 */
class PostDataTablesResponse {
    /**
     * Constructs a new <code>PostDataTablesResponse</code>.
     * PostDataTablesResponse
     * @alias module:model/PostDataTablesResponse
     */
    constructor() { 
        
        PostDataTablesResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostDataTablesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostDataTablesResponse} obj Optional instance to populate.
     * @return {module:model/PostDataTablesResponse} The populated <code>PostDataTablesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostDataTablesResponse();

            if (data.hasOwnProperty('resourceIdentifier')) {
                obj['resourceIdentifier'] = ApiClient.convertToType(data['resourceIdentifier'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} resourceIdentifier
 */
PostDataTablesResponse.prototype['resourceIdentifier'] = undefined;






export default PostDataTablesResponse;

