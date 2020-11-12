

import ApiClient from '../ApiClient';
import PostCollectionSheetChanges from './PostCollectionSheetChanges';

/**
 * The PostCollectionSheetResponse model module.
 * @module model/PostCollectionSheetResponse
 * @version 1.0
 */
class PostCollectionSheetResponse {
    /**
     * Constructs a new <code>PostCollectionSheetResponse</code>.
     * PostCollectionSheetResponse
     * @alias module:model/PostCollectionSheetResponse
     */
    constructor() { 
        
        PostCollectionSheetResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostCollectionSheetResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostCollectionSheetResponse} obj Optional instance to populate.
     * @return {module:model/PostCollectionSheetResponse} The populated <code>PostCollectionSheetResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostCollectionSheetResponse();

            if (data.hasOwnProperty('groupId')) {
                obj['groupId'] = ApiClient.convertToType(data['groupId'], 'Number');
            }
            if (data.hasOwnProperty('resourceId')) {
                obj['resourceId'] = ApiClient.convertToType(data['resourceId'], 'Number');
            }
            if (data.hasOwnProperty('changes')) {
                obj['changes'] = PostCollectionSheetChanges.constructFromObject(data['changes']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} groupId
 */
PostCollectionSheetResponse.prototype['groupId'] = undefined;

/**
 * @member {Number} resourceId
 */
PostCollectionSheetResponse.prototype['resourceId'] = undefined;

/**
 * @member {module:model/PostCollectionSheetChanges} changes
 */
PostCollectionSheetResponse.prototype['changes'] = undefined;






export default PostCollectionSheetResponse;

