

import ApiClient from '../ApiClient';

/**
 * The PostFloatingRatesResponse model module.
 * @module model/PostFloatingRatesResponse
 * @version 1.0
 */
class PostFloatingRatesResponse {
    /**
     * Constructs a new <code>PostFloatingRatesResponse</code>.
     * PostFloatingRatesResponse
     * @alias module:model/PostFloatingRatesResponse
     */
    constructor() { 
        
        PostFloatingRatesResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostFloatingRatesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostFloatingRatesResponse} obj Optional instance to populate.
     * @return {module:model/PostFloatingRatesResponse} The populated <code>PostFloatingRatesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostFloatingRatesResponse();

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
PostFloatingRatesResponse.prototype['resourceId'] = undefined;






export default PostFloatingRatesResponse;

