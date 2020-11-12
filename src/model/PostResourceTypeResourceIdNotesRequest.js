  

import ApiClient from '../ApiClient';

/**
 * The PostResourceTypeResourceIdNotesRequest model module.
 * @module model/PostResourceTypeResourceIdNotesRequest
 * @version 1.0
 */
class PostResourceTypeResourceIdNotesRequest {
    /**
     * Constructs a new <code>PostResourceTypeResourceIdNotesRequest</code>.
     * PostResourceTypeResourceIdNotesRequest
     * @alias module:model/PostResourceTypeResourceIdNotesRequest
     */
    constructor() { 
        
        PostResourceTypeResourceIdNotesRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostResourceTypeResourceIdNotesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostResourceTypeResourceIdNotesRequest} obj Optional instance to populate.
     * @return {module:model/PostResourceTypeResourceIdNotesRequest} The populated <code>PostResourceTypeResourceIdNotesRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostResourceTypeResourceIdNotesRequest();

            if (data.hasOwnProperty('note')) {
                obj['note'] = ApiClient.convertToType(data['note'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} note
 */
PostResourceTypeResourceIdNotesRequest.prototype['note'] = undefined;






export default PostResourceTypeResourceIdNotesRequest;

