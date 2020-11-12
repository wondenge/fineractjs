

import ApiClient from '../ApiClient';

/**
 * The PostTellersTellerIdCashiersCashierIdAllocateResponse model module.
 * @module model/PostTellersTellerIdCashiersCashierIdAllocateResponse
 * @version 1.0
 */
class PostTellersTellerIdCashiersCashierIdAllocateResponse {
    /**
     * Constructs a new <code>PostTellersTellerIdCashiersCashierIdAllocateResponse</code>.
     * PostTellersTellerIdCashiersCashierIdAllocateResponse
     * @alias module:model/PostTellersTellerIdCashiersCashierIdAllocateResponse
     */
    constructor() { 
        
        PostTellersTellerIdCashiersCashierIdAllocateResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostTellersTellerIdCashiersCashierIdAllocateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostTellersTellerIdCashiersCashierIdAllocateResponse} obj Optional instance to populate.
     * @return {module:model/PostTellersTellerIdCashiersCashierIdAllocateResponse} The populated <code>PostTellersTellerIdCashiersCashierIdAllocateResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostTellersTellerIdCashiersCashierIdAllocateResponse();

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
PostTellersTellerIdCashiersCashierIdAllocateResponse.prototype['resourceId'] = undefined;

/**
 * @member {Number} subResourceId
 */
PostTellersTellerIdCashiersCashierIdAllocateResponse.prototype['subResourceId'] = undefined;






export default PostTellersTellerIdCashiersCashierIdAllocateResponse;

