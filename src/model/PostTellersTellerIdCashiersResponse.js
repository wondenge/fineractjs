

import ApiClient from '../ApiClient';

/**
 * The PostTellersTellerIdCashiersResponse model module.
 * @module model/PostTellersTellerIdCashiersResponse
 * @version 1.0
 */
class PostTellersTellerIdCashiersResponse {
    /**
     * Constructs a new <code>PostTellersTellerIdCashiersResponse</code>.
     * PostTellersTellerIdCashiersResponse
     * @alias module:model/PostTellersTellerIdCashiersResponse
     */
    constructor() { 
        
        PostTellersTellerIdCashiersResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostTellersTellerIdCashiersResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostTellersTellerIdCashiersResponse} obj Optional instance to populate.
     * @return {module:model/PostTellersTellerIdCashiersResponse} The populated <code>PostTellersTellerIdCashiersResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostTellersTellerIdCashiersResponse();

            if (data.hasOwnProperty('resourceId')) {
                obj['resourceId'] = ApiClient.convertToType(data['resourceId'], 'Number');
            }
            if (data.hasOwnProperty('subResourceId')) {
                obj['subResourceId'] = ApiClient.convertToType(data['subResourceId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} resourceId
 */
PostTellersTellerIdCashiersResponse.prototype['resourceId'] = undefined;

/**
 * @member {Number} subResourceId
 */
PostTellersTellerIdCashiersResponse.prototype['subResourceId'] = undefined;






export default PostTellersTellerIdCashiersResponse;

