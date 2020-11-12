

import ApiClient from '../ApiClient';
import PostTaxesGroupTaxComponents from './PostTaxesGroupTaxComponents';

/**
 * The PostTaxesGroupRequest model module.
 * @module model/PostTaxesGroupRequest
 * @version 1.0
 */
class PostTaxesGroupRequest {
    /**
     * Constructs a new <code>PostTaxesGroupRequest</code>.
     * PostTaxesGroupRequest
     * @alias module:model/PostTaxesGroupRequest
     */
    constructor() { 
        
        PostTaxesGroupRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostTaxesGroupRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostTaxesGroupRequest} obj Optional instance to populate.
     * @return {module:model/PostTaxesGroupRequest} The populated <code>PostTaxesGroupRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostTaxesGroupRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('locale')) {
                obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
            }
            if (data.hasOwnProperty('taxComponents')) {
                obj['taxComponents'] = ApiClient.convertToType(data['taxComponents'], [PostTaxesGroupTaxComponents]);
            }
            if (data.hasOwnProperty('dateFormat')) {
                obj['dateFormat'] = ApiClient.convertToType(data['dateFormat'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
PostTaxesGroupRequest.prototype['name'] = undefined;

/**
 * @member {String} locale
 */
PostTaxesGroupRequest.prototype['locale'] = undefined;

/**
 * @member {Array.<module:model/PostTaxesGroupTaxComponents>} taxComponents
 */
PostTaxesGroupRequest.prototype['taxComponents'] = undefined;

/**
 * @member {String} dateFormat
 */
PostTaxesGroupRequest.prototype['dateFormat'] = undefined;






export default PostTaxesGroupRequest;

