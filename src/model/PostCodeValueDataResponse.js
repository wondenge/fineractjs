

import ApiClient from '../ApiClient';

/**
 * The PostCodeValueDataResponse model module.
 * @module model/PostCodeValueDataResponse
 * @version 1.0
 */
class PostCodeValueDataResponse {
    /**
     * Constructs a new <code>PostCodeValueDataResponse</code>.
     * PostCodeValueDataResponse
     * @alias module:model/PostCodeValueDataResponse
     */
    constructor() { 
        
        PostCodeValueDataResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostCodeValueDataResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostCodeValueDataResponse} obj Optional instance to populate.
     * @return {module:model/PostCodeValueDataResponse} The populated <code>PostCodeValueDataResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostCodeValueDataResponse();

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
PostCodeValueDataResponse.prototype['resourceId'] = undefined;






export default PostCodeValueDataResponse;

